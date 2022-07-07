## Streamlabs Canvas Frontend Project

Hi there! Thank you for your interest in joining the frontend engineering team at Streamlabs. Thank you so much for taking the time to read through and complete this project. At Streamlabs we are committed to building a talented, empathetic, and passionate team, which is made possible by your investment in this process. We are deeply grateful for your time, passion, and interest.

We believe it is important that our assessment of your skills matches the technical challenges you will face as an engineer at the company. For this project, you will be using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) to build a simplified version of the editor found in the [Streamlabs Desktop App](https://streamlabs.com/streamlabs-live-streaming-software).

## The Project

You should start by familiarizing yourself with the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) if you are not already familiar.

You will be building an HTML page that contains a single canvas element. On the canvas, you will render two images, which can be dragged around using the mouse.

### Please consider the following requirements:

- The canvas should have a 16:9 aspect ratio

- The canvas should take up the maximum available space in the viewport. You should not need to scroll to see any part of the canvas, and it should be responsive to different window sizes.

- You should render 2 images at any position on the canvas. You may choose any images you wish, and they can be hardcoded. There are 2 example images provided in the assets folder in this repository that you can use if you wish. Allowing the user to provide their own images is not part of this assignment. Both of these images should be rendered on the same canvas. You can choose appropriate dimensions of the images but they should maintain proper aspect ratios of the original image sources.

- You should be able to click and **drag each image** individually around the canvas with your mouse cursor. An image should not be allowed to be dragged into a position where it is partially outside the canvas.

- While the image is being dragged, add a green border of 2 pixels width around the dragged image. This border should disappear when the image is not actively being dragged.

### Technology Considerations:

- While you are welcome to use 3rd party libraries, please do not use any libraries that fully implement the rendering/dragging behavior (i.e. Fabric.js). We will be further customizing this behavior in the future, and we need the flexibility that the low-level canvas API provides.

- JavaScript and TypeScript are both acceptable for this assignment, and you should choose whichever one you would prefer.

- While we love automated tests at Streamlabs, you are not required or encouraged to include them as part of your solution. If it helps you to write tests, you are welcome to include them, but we will not be judging them as part of your submission.

## What we are looking for

While the hard requirements of this assignment are somewhat basic, we are looking for assignments that display deep understanding of JavaScript and an ability to write clean, scalable, and well commented code. The infrastructure should be easily able to potentially handle future feature requirements such as the following:

- persisting state on refresh
- ability to add/remove images from file input and/or src
- reordering the z positions of each layers
- instead of drawing static images, drawing custom object (like our alerts)
- resizing and cropping objects
- undo/redo

```
NOTE: You do not need to build these features
```

## Documentation & Thought Process

**Please include a `README.md` file that includes the following information:**

- Instructions on how to run your application

- Your brief answers to the following questions:
  - How long did it take you to complete this assignment?
    It took me about one week because I had read the documentation and play around with the APIs.  
      
  - What about this assignment did you find most challenging?
    Implementing drag and drop and layer of the photos. 

  - What about this assignment did you find unclear?
    After reading the documentations, it was clear to understand the requirments.  


  - Do you feel like this assignment has an appropriate level of difficulty?
    Yes

  - Briefly explain the technical decisions you made in this project, i.e. architecture, code-splitting, libraries, or other decisions and tradeoffs.
  I used Vanilla JavaScript for stand alone project.  I decided not to use any libraries because I want to understand Canvas API.  

## Questions

Please email us if you have any questions along the way. We will try our best to help guide you through any confusion. Feel free to make assumptions and document them as you go as well.

## Submission

Please submit your completed assignment via email to the recruiter who sent it to you. You can submit your assignment as a zip file attachment, or you can push it to a GitHub repository and include a link to the respository. We want to thank you again for your time and for your interest in joing the engineering team at Streamlabs!
