 # shipment-lite
 shipment oversight
|||||||||||||||||||||||||||||||||||||||||||
(c) 2018 - 2019. All Rights Reserved.
|||||||||||||||||||||||||||||||||||||||||||
Created and Designed By: Chris Hantis
All Other Parties Recognized:
|||||||||||||||||||||||||||||||||||||||||||


Internal Project Notes
// App.html - Jquery Plugin: DATA TABLE (#mainTable) //

- How does table reload? / Cam it reload?
- Does MySQL have to be involved?
- How can table keep track of last reload / fetch?

- Shipment Statuses
  - "status_descripion" (ie: Delivered) is the final description.
  - IF "status_descripion" is null then you need to look for the most recent "description"
  - If data.description[0] null, ELSE IF data.description[1] and etc.

- Show the most recent information
  - IF user clicks on an "expand" button show all records for that trackingn number

- IMPORT / EXPORT
  - Style and move around IMPORT / EXPORT buttons

- IMPORT
- EXPORT

- DELETE 
  - When you delete row from table you delete it in the db
  - When you click on row a delete button appears
  - Style delete button like other buttons

- PAGINATION
  - Add Table PAGINATION
    - all (100)
    - urgent (20)
    - cautious (20)
    - ok (60)

// Tracking Table

// Schedule Query / Update Table

// Real Time updates