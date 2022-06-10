// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {  
    timeout: 60000,
    //globalTimeout: 600000,
    reporter:  [
        ['line'], 
        ['allure-playwright'],
        ['junit', { outputFile: 'results.xml' }],
    ],
    testDir: './tests',
    globalTeardown:require.resolve('./global-teardown'),
    use: {
        screenshot: 'only-on-failure',
        video: 'on-first-retry',
        trace: 'on-first-retry',
    },
    projects: [    
        {      
            name: 'Chrome Stable',      
            use: {        
                browserName: 'chromium',        
                // Test against Chrome Stable channel.        
                headless: false,
            },    
        }/*,    
        {      
            name: 'Desktop Safari',      
            use: {        
                browserName: 'webkit',        
                viewport: { width: 1200, height: 750 },      
            }    
        },    
        // Test against mobile viewports.    
        {      
            name: 'Mobile Chrome',      
            use: devices['Pixel 5'],    
        },    
        {      
            name: 'Mobile Safari',      
            use: devices['iPhone 12'],    
        },    
        {      
            name: 'Desktop Firefox',      
            use: {        
                baseURL: 'http://20.82.57.125:8080',
                browserName: 'firefox', 
                headless: false,
                viewport: { width: 800, height: 600 },      
            }    
        },*/
    ],
};

export default config;
