# Day 6
## Scroll Animation

- With scroll, we can use jquery or [Animate On Scroll Library](https://github.com/michalsnik/aos);

- New CSS knowledge:
    - [:nth-of-type(n)](https://www.w3schools.com/cssref/sel_nth-of-type.asp) selector matches element that is the nth child, **of a particular type**, of its parents.
        - They match n based on the specific type.
        - n can be a number, a keyword, or a formula.
    - [:nth-child(n)](https://www.w3schools.com/cssref/sel_nth-child.asp) selector to select the element that is the nth child, **regardless of type**, of its parents.
        - They match n based on the line from the parents.
- New JS knowledge:
    - Use **'scroll'** param in addEventListener to add event when scrolling up/down.
    - Use **window.addEventListener** to add event in window.
    - [getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect):
        ![The view port](/Day6/Image/element-box-diagram.png "The view port")
        - Viewport: the user's visible area of a web page.
        - It *returns* the *size of an element* and *its position relative to the viewport*.
        - It *returns* a *DOMRect object* with *eight properties*: **left, top, right, bottom, x, y, width, height**.
        - **Note**: **If we use with more box by using the loop, they will only count from the viewpoint (not from the last item in the loop)**.