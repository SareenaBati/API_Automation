const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {

    it('should go to App page and then back', async () => {
        await browser.pause(5000);

        const access_ibility = await $("~Access'ibility");
        await access_ibility .click();
        
        const accessibility_node_provider = await $("~Accessibility Node Provider");
        await accessibility_node_provider.click();
        await browser.back();


        const accessibility_node_querying = await $("~Accessibility Node Querying");
        await accessibility_node_querying.click();
        await browser.back();

        const accessibility_service=await $("~Accessibility Service")
        await accessibility_service.click();
        await browser.back();

        const custom_view=await $("~Custom View")
        await custom_view.click();
        await browser.back();
        await browser.back();

       
    });

   
    

    it('should navigate to Accessibility', async () => {
        await browser.pause(5000); 
    
        const accessibility = await $("~Accessibility");
        await accessibility.click();

    
        const accessibility_node_provider = await $("~Accessibility Node Provider");
        await accessibility_node_provider.click();
        await browser.back();

        

        


        // accessibility node querying
        const accessibility_node_querying = await $("~Accessibility Node Querying");
        await accessibility_node_querying.click();
        // checkbox

        const accessibility_node_querying_conquer_world=await $("(//android.widget.CheckBox[@resource-id=\"io.appium.android.apis:id/tasklist_finished\"])[3]");
        await accessibility_node_querying_conquer_world.click();

        const accessibility_node_querying_do_taxes= await $("(//android.widget.CheckBox[@resource-id=\"io.appium.android.apis:id/tasklist_finished\"])[5]");
        await accessibility_node_querying_do_taxes.click();

        const accessibility_node_querying_abolish_IRS=await $("(//android.widget.CheckBox[@resource-id=\"io.appium.android.apis:id/tasklist_finished\"])[6]");
        await accessibility_node_querying_abolish_IRS.click();

        const accessibility_node_querying_tea_with_aunt_sharon=await $("(//android.widget.CheckBox[@resource-id=\"io.appium.android.apis:id/tasklist_finished\"])[7]");
        await accessibility_node_querying_tea_with_aunt_sharon.click();

        await browser.back();

        const accessibility_service=await $("~Accessibility Service")
        await accessibility_service.click();
        await browser.back();

        const custom_view=await $("~Custom View")
        await custom_view.click();
        await browser.back();
        await browser.back();

    });
    


    it('should navigate to Animation', async () => {
        await browser.pause(5000);
        const animation=await $("~Animation");
        await animation.click();

        
        await browser.back();
    });

    it('should go to App page and then back', async () => {
        await browser.pause(5000);

        const app = await $("~App");
        await app.waitForDisplayed({ timeout: 5000 });
        await app.click();

        await browser.pause(2000);
        await browser.back(); 
    });


    it('should navigate to graphics',async()=>{
        await browser.pause(5000);
        const graphics=await $("~Graphics");
        await graphics.click();
        await browser.back();
    });

    it('should navigate to media',async()=>{
        await browser.pause(5000);c
        const media=await $("~Media");
        await media.click();
        await browser.back();
    });

    it('should navigate to NFC',async()=>{
        await browser.pause(5000);
        const NFC=await $("~NFC");
        await NFC.click();
        await browser.back();
    });

    it('should navigate to OS',async()=>{
        await browser.pause(5000);
        const OS=await $("~OS");
        await OS.click();
        await browser.back();
    });

    it('should navigate to Preference',async()=>{
        await browser.pause(5000);
        const preference=await $("~Preference");
        await preference.click();
        await browser.back();
    });

    it('should navigate to Text',async()=>{
        await browser.pause(5000);
        const text=await $("~Text");
        await text.click();
        await browser.back();
    });

    it('should navigate to Views and perform scrolling', async () => {
        await browser.pause(5000);
        const views = await $("~Views");
        await views.click();

        await browser.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: { pointerType: "touch" },
                actions: [
                    { type: "pointerMove", duration: 0, x: 360, y: 500 },
                    { type: "pointerDown", button: 0 },
                    { type: "pause", duration: 500 },
                    { type: "pointerMove", duration: 3000, x: 360, y: -6000 },
                    {type:"pointerMove", duration: 3000,x:360,y:6000},
                    { type: "pointerUp", button: 0 }
                ]
            }
        ]);
        
        await browser.pause(2000);

       

        const animation = await $("~Animation");
        await animation.click();

        const transition = await $("~3D Transition");
        await transition.click();
        await browser.back();

        const interpolators = await $("~Interpolators");
        await interpolators.click();

        const dropdown = await $("id:android:id/text1");

        const decelerate = await $("//android.widget.CheckedTextView[@resource-id='android:id/text1' and @text='Decelerate']");
        await dropdown.click();
        await decelerate.click();

        const accelerate_decelerate = await $("//android.widget.CheckedTextView[@resource-id='android:id/text1' and @text='Accelerate/Decelerate']");
        await dropdown.click();
        await accelerate_decelerate.click();

        const anticipate = await $("//android.widget.CheckedTextView[@resource-id='android:id/text1' and @text='Anticipate']");
        await dropdown.click();
        await anticipate.click();

        const overshoot = await $("//android.widget.CheckedTextView[@resource-id='android:id/text1' and @text='Overshoot']");
        await dropdown.click();
        await overshoot.click();

        const anticipate_overshoot = await $("//android.widget.CheckedTextView[@resource-id='android:id/text1' and @text='Anticipate/Overshoot']");
        await dropdown.click();
        await anticipate_overshoot.click();

        const bounce = await $("//android.widget.CheckedTextView[@resource-id='android:id/text1' and @text='Bounce']");
        await dropdown.click();
        await bounce.click();

        await browser.back();

        const shake = await $("~Shake");
        await shake.click();

        const enter_your_password = await $("id:io.appium.android.apis:id/pw");
        await enter_your_password.setValue("test");

        const login = await $("~Login");
        await login.click();

        await browser.back();
        await browser.back();
        await browser.back();
    });

});