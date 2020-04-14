class Api::V1::QuotesController < ApplicationController
  def index
    quote = Quote.all.order(created_at: :desc)
    render json: quote
  end

  def create
    quote = Quote.create!(quote_params)
    if quote
      render json: quote
    else 
      render json: quote.errors
    end
  end

  def show
    if quote
      render json: quote
    else 
      render json: quote.errors
    end
  end

  def destroy
    quote&.destroy
    render json: { message: 'Quote Deleted' }
  end

  private 

  def quote_params
    params.permit(:first_name, :last_name, :email, :number, :project_info)
  end

  def quote
    @quote ||= Quote.find(params[:id])
  end
end
