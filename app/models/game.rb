class Game < ApplicationRecord
    has_many :reviews
    before_create :slugify
    before_update :slugify

    def slugify
        self.slug = title.parameterize
    end

    def avg_score
        return 0 unless reviews.size.positive?

        avg = reviews.average(:score)
        if avg.nil?
            return 0
        else
            avg.round(2).to_f
        end
    end

end
