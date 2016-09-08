import expect from 'expect'
import session from '../src/core/session/session';
import PersonValidator from '../src/core/model/personvalidator';

describe("Session", function() {

  it("should be initialized - no user is logged in", function() {
    expect(session.getCurrentUser()).toBe('');
  });

  it("should set current user", function() {
    session.setCurrentUser('andrea')
    expect(session.getCurrentUser()).toBe('andrea');
  });

});
