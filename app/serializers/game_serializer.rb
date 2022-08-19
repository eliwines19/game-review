class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :image_url, :slug

  has_many :reviews
end
