In the home.ts page I had to use promises to ensure that minAge and maxAge were defined BEFORE calling the API url. This was done to avoid an error I encountered constantly where the values were returning as undefined and breaking the API link.

When hitting the 'Cancel' button on the Settings page, I used a clearInfo() method to clear the items saved in storage, so that it would reset the user to the home page and prompt the "please enter country ID" message when navigating to the Settings page again.
