#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS

Elements and Sources

  * Javascript Debugging
  * Performance Optimization 

Network (for changes to code, use Elements and Sources)

* What's the quick key for your OS to spawn the Dev Tools inspector?

For Mac: Cmd + Alt + i

For Chromebook: Control + Shift + i

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)

There is an image in the center of the page with text "The Most Important things are not things" which is black.    The background colors of the page are black and gray.

  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
  
My image: http://postimg.org/image/3nloouzgz/

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

It is an image file: http://www.postmachina.com/images/home_bg.gif

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 

http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

Open DevTools.  Select the "Network" Tab.  Refresh the page.  Sort by "Type." Find the "image/" files.  Assess each one's Size/Content column.  According to Devtools, "Size is the combined size of the response headers (usually a few hundred bytes) plus the response body, as delivered by the server. Content is the size of the resource's decoded content. If the resource was loaded from the browser's cache rather than over the network, this field will contain the text (from cache)."  For the "largest image," refer to the "Content" part of the Size/Content Column.  Find the largest number.

Here is the URL:  http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

It is 316 KB

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
