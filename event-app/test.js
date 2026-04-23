const { Builder, By, until } = require('selenium-webdriver');

async function runTests() {
    let driver = await new Builder().forBrowser('chrome').build();

    let results = [];

    function report(testName, expected, actual, condition) {
        let status = condition ? "PASS" : "FAIL";

        console.log(`\n==============================`);
        console.log(`Test Case: ${testName}`);
        console.log(`Expected : ${expected}`);
        console.log(`Actual   : ${actual}`);
        console.log(`Result   : ${status}`);
        console.log(`==============================`);

        results.push({ testName, status });
    }

    try {
        await driver.get('http://localhost:5000');
        await driver.wait(until.elementLocated(By.tagName("body")), 5000);

        let title = await driver.getTitle();
        report(
            "Page Load",
            "Title contains 'Registration'",
            title,
            title.includes("Registration")
        );

        let submitBtn = await driver.findElement(By.css("input[type='submit']"));
        await submitBtn.click();
        await driver.sleep(1000);

        let url = await driver.getCurrentUrl();
        report(
            "Empty Form Validation",
            "Form should not submit (stay on same page)",
            url,
            url.includes("localhost")
        );

        let email = await driver.findElement(By.id("email"));
        let password = await driver.findElement(By.id("password"));

        await email.clear();
        await password.clear();

        await email.sendKeys("invalidemail");
        await password.sendKeys("123456");

        await submitBtn.click();
        await driver.sleep(1000);

        url = await driver.getCurrentUrl();
        report(
            "Invalid Email Validation",
            "Form should reject invalid email",
            url,
            url.includes("localhost")
        );

        await email.clear();
        await password.clear();

        await email.sendKeys("test@gmail.com");
        await password.sendKeys("123456");

        await submitBtn.click();

        await driver.wait(until.elementLocated(By.xpath("//p")), 5000);

        let message = await driver.findElement(By.xpath("//p")).getText();
        report(
            "Valid Registration",
            "Should show 'Registration successful'",
            message,
            message.includes("Registration successful")
        );

        console.log(`\n========= TEST SUMMARY =========`);

        let passCount = results.filter(r => r.status === "PASS").length;
        let failCount = results.filter(r => r.status === "FAIL").length;

        results.forEach(r => {
            console.log(`${r.status}: ${r.testName}`);
        });

        console.log(`\nTotal: ${results.length}`);
        console.log(`Passed: ${passCount}`);
        console.log(`Failed: ${failCount}`);
        console.log(`================================`);

    } catch (err) {
        console.error("Test Execution Failed:", err);
    } finally {
        await driver.quit();
    }
}

runTests();