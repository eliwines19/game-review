class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :image_url, :slug, :avg_score, :release_date

  has_many :reviews
end
