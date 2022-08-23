class Game < ApplicationRecord
    has_many :reviews
    before_create :slugify
    before_update :slugify

    def slugify
        self.slug = title.parameterize
    end

    def avg_score
        reviews.average(:score).to_f.round(2)
    end

end
