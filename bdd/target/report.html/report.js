$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("reg.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to signup successfully",
  "description": "",
  "id": "registration;user-should-be-able-to-signup-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I render the widget",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on signin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on registration",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to see the sign up form",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should be allow to populate the fiels successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see a Thank you message",
  "keyword": "Then "
});
formatter.match({
  "location": "Zoopla.i_render_the_widget()"
});
formatter.result({
  "duration": 9877304751,
  "status": "passed"
});
formatter.match({
  "location": "Zoopla.i_click_on_signin()"
});
formatter.result({
  "duration": 2980684648,
  "status": "passed"
});
formatter.match({
  "location": "Zoopla.i_click_on_registration()"
});
formatter.result({
  "duration": 179490902,
  "status": "passed"
});
formatter.match({
  "location": "Zoopla.i_should_be_able_to_see_the_sign_up_form()"
});
formatter.result({
  "duration": 3141793181,
  "status": "passed"
});
formatter.match({
  "location": "Zoopla.i_should_be_allow_to_populate_the_fiels_successfully()"
});
formatter.result({
  "duration": 7310903895,
  "status": "passed"
});
formatter.match({
  "location": "Zoopla.i_should_see_a_Thank_you_message()"
});
formatter.result({
  "duration": 204822095,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"fancybox-content\"]/div/div/h1\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.40.565386 (45a059dc425e08165f9a10324bd1380cc13ca363),platform\u003dMac OS X 10.12.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027Bonds-MacBook-Pro.local\u0027, ip: \u0027192.168.43.182\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565386 (45a059dc425e08..., userDataDir: /var/folders/y5/nng_4q797yq...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: f820c21774deeb3febaeb470c32fbbe6\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"fancybox-content\"]/div/div/h1}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\n\tat bdd.bdd.Zoopla.i_should_see_a_Thank_you_message(Zoopla.java:76)\n\tat ✽.Then I should see a Thank you message(reg.feature:10)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "User should be able to sign in",
  "description": "",
  "id": "registration;user-should-be-able-to-sign-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I render the widget",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on signin",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter my username and password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should be able to sign in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Zoopla.i_render_the_widget()"
});
formatter.result({
  "duration": 8413948643,
  "status": "passed"
});
formatter.match({
  "location": "Zoopla.i_click_on_signin()"
});
formatter.result({
  "duration": 2288505237,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});