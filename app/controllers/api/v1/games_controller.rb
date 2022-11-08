module Api
    module V1
        class GamesController < ApplicationController
            protect_from_forgery with: :null_session

            def index

                if params[:sort] && params[:sort].length > 1
                    if params[:sort] === "release_date"
                        games = Game.all.sort_by(&:release_date).reverse
                    elsif params[:sort] === "avg_score"
                        games = Game.all.sort_by(&:avg_score).reverse
                    end
                elsif params[:search] && params[:search].length > 1

                    binding.pry

                else
                    games = Game.all
                end
                
                # if params[:sort] && params[:sort] === "release_date"
                #     games = Game.all.sort_by(&:release_date).reverse
                # elsif params[:sort] && params[:sort] === "avg_score"
                #     games = Game.all.sort_by(&:avg_score).reverse
                # else
                #     games = Game.all
                # end

                render json: GameSerializer.new(games, options).serialized_json
            end

            def show
                game = Game.find_by(slug: params[:slug])

                render json: GameSerializer.new(game, options).serialized_json
            end

            def create
                game = Game.new(game_params)

                if game.save
                    render json: GameSerializer.new(game).serialized_json
                else
                    render json: { error: game.errors.messages }, status: 422
                end
            end

            def update
                game = Game.find_by(slug: params[:slug])

                if game.update(game_params)
                    render json: GameSerializer.new(game, options).serialized_json
                else
                    render json: { error: game.errors.messages }, status: 422
                end
            end

            def destroy
                game = Game.find_by(slug: params[:slug])

                if game.destroy
                    head :no_content
                else
                    render json: { error: game.errors.messages }, status: 422
                end
            end

            private
            
            def game_params
                params.require(:game).permit(:title, :description, :image_url, :release_date)
            end

            def options
                @options ||= { include: %i[reviews] }
            end
            
        end
    end
end