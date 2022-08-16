class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :title
      t.string :description
      t.string :image_url
      t.string :slug

      t.timestamps
    end
  end
end
