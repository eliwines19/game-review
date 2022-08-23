class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :image_url, :slug, :avg_score

  has_many :reviews
end
