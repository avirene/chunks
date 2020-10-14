class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.string :word
      t.text :definition
      t.text :example
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
