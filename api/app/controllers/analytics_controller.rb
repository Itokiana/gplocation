class AnalyticsController < ApplicationController
    require 'google/apis/analyticsreporting_v4'
    require 'googleauth'

    include Google::Apis::AnalyticsreportingV4
    include Google::Auth

    # VIEW_ID = "257816808" #your profile ID from your Analytics Profile
    # SCOPE = 'https://www.googleapis.com/auth/analytics.readonly'

  def show
    
    # @client = AnalyticsReportingService.new

    # #Using the "Server to Server auth mechanism as documented at
    # #https://developers.google.com/api-client-library/ruby/auth/service-accounts
    # @creds = ServiceAccountCredentials.make_creds({:json_key_io => File.open('../../gplocation-fbab7a107175.json'),
    #                                                     :scope => SCOPE})
    # @client.authorization = @creds

    # grr = GetReportsRequest.new
    # rr = ReportRequest.new

    # rr.view_id = VIEW_ID

    # #put a filter which only returns results for the root page
    # rr.filters_expression="ga:pagePath==/"

    # #We want the number of sessions
    # metric = Metric.new
    # metric.expression = "ga:sessions"
    # rr.metrics = [metric]

    # #We want this for the last 7 days
    # range = DateRange.new
    # range.start_date = "7daysAgo"
    # range.end_date = "today"
    # rr.date_ranges = [range]

    # grr.report_requests = [rr]

    # response = @client.batch_get_reports(grr)
    # puts response.inspect
    # puts response.reports.inspect


    analytics = Google::Apis::AnalyticsreportingV4::AnalyticsReportingService.new
    analytics.authorization = current_user.token # See: https://github.com/zquestz/omniauth-google-oauth2

    date_range = Google::Apis::AnalyticsreportingV4::DateRange.new(start_date: '7DaysAgo', end_date: 'today')
    metric = Google::Apis::AnalyticsreportingV4::Metric.new(expression: 'ga:sessions', alias: 'sessions')
    dimension = Google::Apis::AnalyticsreportingV4::Dimension.new(name: 'ga:browser')

    request = Google::Apis::AnalyticsreportingV4::GetReportsRequest.new(
      report_requests: [Google::Apis::AnalyticsreportingV4::ReportRequest.new(
        view_id: '257816808',
        metrics: [metric],
        dimensions: [dimension],
        date_ranges: [date_range]
      )]
    ) # thanks to @9mm: https://github.com/google/google-api-ruby-client/issues/489

    response = analytics.batch_get_reports(request)
    puts response.reports
  end
end
