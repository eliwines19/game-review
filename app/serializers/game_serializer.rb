class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :image_url, :slug
end
