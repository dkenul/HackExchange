class User < ActiveRecord::Base

  after_initialize :ensure_session_token

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many(
    :memberships,
    class_name: "Membership",
    foreign_key: :member_id
  )

  has_many(
    :communities,
    through: :memberships,
    source: :community
  )

  has_many(
    :questions,
    through: :memberships,
    source: :questions
  )

  has_many(
    :answers,
    class_name: "Answer",
    foreign_key: :author_id
  )

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :author_id
  )


  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end

  def is_password?(pass)
    BCrypt::Password.new(password_digest).is_password?(pass)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
