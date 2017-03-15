Feature: Websocket
  As a websocket tester
  I want to send a websocket request
  So that I can verify the websocket response

  @demo
  Scenario Outline: Base Doc methods for Websocket
    Given I open a websocket
    When I make a websocket request for "<request>"
    Then I get the correct response for "<request>"
    Examples:
    |request|
    |example|
