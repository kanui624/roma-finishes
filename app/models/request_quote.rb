class RequestQuote < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
    validates :number, presence: true
    validates :project_info, presence: true
end
