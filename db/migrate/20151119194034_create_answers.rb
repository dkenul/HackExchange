class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.integer :question_id
      t.text :description, null: false

      t.timestamps null: false
    end

    add_index :answers, :question_id
  end
end
