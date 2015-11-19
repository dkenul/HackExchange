class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :membership_id
      t.string :title, null: false
      t.text :description, null: false

      t.timestamps null: false
    end

    add_index :questions, :membership_id
  end
end
