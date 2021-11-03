# Day 10
## FAQ Collapse

1. New JS knowledge:
    - If you want to add **classList** for parent of current node, just *use* **element.parentNode.classList.method**.
    - **Use toggle** in the case you **want** to  **add and delete classname**.
2. New CSS knowledge:
    - `Main-axis` and `Cross-axis`:
        - `Flex-direction` = **row**:
        ![alt-text-2](./Image/basics3.png "title-2") ![alt-text-1](./Image/basics1.png "title-1") 

        - `Flex-direction` = **column**
        ![alt-text-2](./Image/basics4.png "title-2") ![alt-text-1](./Image/basics2.png "title-1") 

    - `justify-content` and `align-item`:
        - The `align-items` and `align-self` properties control alignment of our flex items on the cross axis.
        - The `main axis` is **defined** by **flex-direction**, which has four possible values:
            - *row*
            - *row-reverse*
            - *column*
            - *column-reverse*