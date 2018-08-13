const FaqList = [
    {
      type:"Organisation",
      content: {
          type:'',
          header:null,
          ques:' How do I add a new department ?',
          footer:null
      },
      list:[
        "Click on ‘Organisation’ on the left navigation bar.",
        "Click on ‘New Department+’.",
        "Add department name and number of levels in that department.",
        "Click on ‘Add Department",
        "A new department would be created successfully."
     ],
    },

    {
      type:"Organisation",
      content:{
          type:"",
          header:null,
          ques:' How do I add a new employee ?',
          footer:null
      },
      list: [
        "Click on ‘Organisation’ on the left navigation bar.",
        "Click on Employees tab on the top bar",
        "Click on ‘New Employee+’.",
        "Add basic details, hierarchy and other details by clicking ‘Continue’ after each step",
        "Click on ‘Add Employee",
        "The employee would be successfully added in respective department and level"
      ]
    },

    { 
      type:"Organisation",
      content:{
           header:null,
           ques:' How do I add a new office ?',
           footer:null
      },
      list:
      ["Click on ‘Organisation’ on the left navigation bar.",
      "Click on Offices tab on the top bar",
      "Click on ‘New Office+’.",
      "Add Office Name/Branch and do Geo-fencing of office location",
      "Click on ‘Add Office’",
      "A new office would be successfully added"

      ]
    },

    { 
      type:"Policies",
      content:{
           header:null,
           ques:' How do I set policy for a specific level within a department?',
           footer:null
      },
      list:
      [
        "Click on ‘Policies’ on the left navigation bar.",
        "Click on the View button (Eye shaped) of the department we look to set the policy",
        "Click on the View button (Eye shaped) of the level we look to set the policy",
        "Choose the category like Outstation Travel, Stay, Food etc. by clicking it on the left bar",
        "Click on the View button (Eye shaped) of the service we look to set the policy",
        "Click on Add Policy Button on the right",
        "Set various limits and click Add Policy at the bottom",
        "Policies would be successfully added for that service for the level-department chosen"

      ]
    },

    { 
      type:"Policies",
      content:{
           header:null,
           ques:' How do I set policy in bulk for different level-department combination?',
           footer:null
      },
      list:
      [
        "Click on ‘Policies’ on the left navigation bar.",
        "Click on ‘Bulk Policy’ on the top bar",
        "Select the level-department combinations for which we are setting policy",
        "Select the category for which we need to set up policy",
        "Select the limits or the service like flight, train etc.",
        "Enter the relevant details and submit the policy",
        "Policy would be successfully updated in bulk for level-department chosen earlier"

      ]
    },

    { 
      type:"Policies",
      content:{
           header:null,
           ques:' How do I set trip level policy?',
           footer:null
      },
      list:
      [
       "Click on ‘Policies’ on the left navigation bar",
       "Click on ‘Trips Policy’ on the top bar",
       "Click on the View button (Eye shaped) of the department we look to set the policy",
       "Click on the View button (Eye shaped) of the level we look to set the policy",
       "Click on Add Policy Button on the right",
       "Enter the trip amount limit and the allowable increase (in percentage) terms",
       "Click on Add Policy Button at the bottom",
       "Trip Policy would be added successfully for the employees of level-department chosen"
      ]
    },


    { 
      type:"Expense",
      content:{
           header:null,
           ques:' How do I export expense data?',
           footer:null
      },
      list:
      [
        ""
      ]
    },


    { 
      type:"Wallet",
      content:{
           header:null,
           ques:' How do I see the transactions related to Company Wallet?',
           footer:null
      },
      list:
      [
        "Click on ‘Wallet’ on the left navigation bar",
        "‘Date Filter’ (on top left) can be applied to see the transactions for a date range"

      ]
    },


    { 
      type:"Wallet",
      content:{
           header:null,
           ques:' How do I enable/disable payment through wallet?',
           footer:null
      },
      list:
      [
        "Click on ‘Wallet’ on the left navigation bar",
        "Click on ‘Wallet Settings’ on the top bar",
        "Click the toggle button to enable/disable payment from wallet for a specific service"

      ]
    },


    { 
      type:"Account",
      content:{
           header:null,
           ques:' How do I enter/update GST details of the company?',
           footer:null
      },
      list:
      [
        "Click on ‘Account Settings’ on the left navigation bar",
        "Enter GSTIN, Company name, email, address, contact details",
        "Click on ‘Update GST Details’ button",
        "Details would get saved successfully"

      ]
    },


    { 
      type:"Account",
      content:{
           header:null,
           ques:' How do I change password for the company account?',
           footer:null
      },
      list:
      [
        "Click on ‘Account Settings’ on the left navigation bar",
        "Enter Current Password",
        "Enter New Password",
        "Put the New password again for confirmation",
        "Click ‘Change Password’ button and the password would be updated"

      ]
    },


];

export default FaqList;