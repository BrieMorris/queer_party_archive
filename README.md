## MN Queer Party Archive
MN Queer Party Archive is a space for the MN queer community to archive their parties.  The goal is to allow users to create the archive by allowing them to upload posters from queer events with poster image, description and event date.This application is not a social media tool. It is meant to archive queer community through the weird and wonderful parties that we have. It is not a museum space, instead it’s a community tool where users get to add and manage their own content. 

After mapping out my project in freeform. I created the components. 
Then I set up the routes, sagas, and reducers. Focusing on the React component named Archive that renders a list of posters and provides options to add content or view individual posters. 

Nav bar React code for a navigation bar component using React Router and Redux. This component, named Nav, renders different links based on whether a user is logged in or not. The render method returns the JSX structure for the navigation bar. It includes a link to the home page with the title "MN Queer Party Archive" and a set of conditional links based on the user's login status.

React component named ViewPoster that is using Redux for state management and React Router for navigation. This component appears to display information about a specific poster, including its images, description, date, and associated memories. Users can delete and edit individual memories, and there's a button to navigate back to the archive.

React component named AddContent that is designed for adding or editing content related to a poster. Using the useState hook to manage the state of image and memory.The onFileChange function is using the fileToUpload and using Redux for state management. A form for adding content. In the addContent function, when editing content (editId is truthy), you are dispatching an action with fileToUpload as an argument. Ensure that fileToUpload is accessible in this context.

AddPoster component appears to be a React component that allows users to upload event posters along with date and description. When users click to add poster a modal pops up to remind them to check the content does not include personal information. The user can cancel the upload or save the poster.  

To DO 
fix addPoster button in modal
reload all data from launch
check everything is working with heroku launch
clean up all templates and not used components
change restyle to css?




## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: ://gist.github.com/PurpleBooth/109311bb0361f32d87a2https