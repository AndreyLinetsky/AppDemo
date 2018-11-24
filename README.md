1. App Setup:
   a) clone repository
   b) cd app-demo
   c) npm install
   d) npm start

2. Design remarks:
   a) All the resources are fetched during initial load
   b) Resource selection - the application will fetch selected resource missing actions from the server
   c) Filtering - if currently selected resource was fetched then the application will fetch it`s missing actions(for example a new action was added since the last fetch)
   d) Filtering - in case the selected resource was not fetched then the application will prevent rerendering of
   the details view. Implemented with ShouldComponentUpdate in DetailsViewContainer
