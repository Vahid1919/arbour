# Arbour
This repository contains my project for my Web Application Development class.

# Progress

### Phase 1 - Project Proposal - Done
### Phase 2 - Frontend
    Completed HTML And CSS files 
    


# Hosted on Vercel
 - https://arbour.vercel.app/
 Remark: This Web app is optimized for mobile. Should preferably be looked at in responsive mode or on a phone/tablet.

# Design Decisions 
The bulk of this application -- the dashboards -- are all maintained in the `main` route. By selecting the indiviual buttons on the `navbar` we can switch the component out and show separate elements. 

Within this `main` route one can start planting and sponsor processes, look at the map to see the trees they planted and also their profile view. 

When a user wants to send proof of a plant or verify a planters report, we switch to a separate route depending on the individual process. 

## CSS Separation 
Although I used raw CSS to style my components, I utilized a unique way of separating my code into separate modules. This helps me re-use names across different components without any clashes. eg: I can create a `.button` class for several components and provide individual styling, hence avoiding the need to come up with longer complicated names for each button element.


