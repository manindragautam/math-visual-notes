# **Quadratic Equations**

## Chapter 60: Square Root Property

### Definition

A method to solve equations where a variable is squared (x² = k). The solutions are:

-   Two real roots (±√k) if k > 0
-   One real root (0) if k = 0
-   No real roots if k < 0 (only complex roots)

### Examples

-   **Example 1**: Solve x² = 25

    -   Take square root of both sides:
        $$ x = \pm \sqrt{25} $$
     $$ x = 5 \quad \text{or} \quad x = -5 $$

-   **Example 2**: Solve (y + 3)² = 16

    -   Square root both sides:
        $$ y + 3 = \pm \sqrt{16} $$
     $$ y + 3 = 4 \quad \Rightarrow \quad y = 1 $$
     $$ y + 3 = -4 \quad \Rightarrow \quad y = -7 $$

-   **Example 3**: Solve 2z² = 18

    -   Divide by 2 first:
        $$ z² = 9 $$
     $$ z = \pm \sqrt{9} $$
     $$ z = 3 \quad \text{or} \quad z = -3 $$

-   **Example 4**: Solve (2x - 1)² = 5
    -   Square root both sides:
        $$ 2x - 1 = \pm \sqrt{5} $$
        -   Case 1:
            $$ 2x = 1 + \sqrt{5} $$
       $$ x = \frac{1 + \sqrt{5}}{2} $$
        -   Case 2:
            $$ 2x = 1 - \sqrt{5} $$
       $$ x = \frac{1 - \sqrt{5}}{2} $$

### Key Takeaways

> -   Works only when the variable is isolated and squared
> -   Always include ± for two possible solutions
> -   Can solve equations like (ax + b)² = k too

---

## Chapter 61: Completing the Square

### Definition

A method to rewrite quadratic equations in perfect square form (x + h)² = k to make them easier to solve.

### Method

1. Start with: ax² + bx + c = 0
2. Divide by 'a' if a ≠ 1
3. Move constant term to right side
4. Add (b/2)² to both sides
5. Write left side as perfect square
6. Solve using square root property

### Examples

-   **Example 1**: Solve x² + 6x + 5 = 0

    -   Step 1: x² + 6x = -5
    -   Step 2: (6/2)² = 9 → add to both sides  
        $$ x² + 6x + 9 = -5 + 9 $$
    -   Step 3: (x + 3)² = 4
    -   Step 4: x + 3 = ±2  
         $$ x = -3 + 2 = -1 $$
     $$ x = -3 - 2 = -5 $$

-   **Example 2**: Solve 2x² - 8x + 3 = 0

    -   Step 1: Divide by 2  
        $$ x² - 4x + 1.5 = 0 $$
    -   Step 2: x² - 4x = -1.5
    -   Step 3: (-4/2)² = 4 → add to both sides  
        $$ x² - 4x + 4 = -1.5 + 4 $$
    -   Step 4: (x - 2)² = 2.5
    -   Step 5: x - 2 = ±√2.5  
        $$ x = 2 \pm \sqrt{\frac{5}{2}} $$

-   **Example 3**: Solve x² + 4x = 1

    -   Step 1: (4/2)² = 4 → add to both sides  
        $$ x² + 4x + 4 = 1 + 4 $$
    -   Step 2: (x + 2)² = 5
    -   Step 3: x + 2 = ±√5  
        $$ x = -2 \pm \sqrt{5} $$

-   **Example 4**: Solve 3x² + 12x - 6 = 0
    -   Step 1: Divide by 3  
        $$ x² + 4x - 2 = 0 $$
    -   Step 2: x² + 4x = 2
    -   Step 3: (4/2)² = 4 → add to both sides  
        $$ x² + 4x + 4 = 2 + 4 $$
    -   Step 4: (x + 2)² = 6
    -   Step 5: x + 2 = ±√6  
        $$ x = -2 \pm \sqrt{6} $$

### Key Takeaways

> -   Always make coefficient of x² = 1 first
> -   Add (b/2)² to create perfect square trinomial
> -   Used to derive quadratic formula

---

## Chapter 62: The Quadratic Formula

### Definition

A formula that gives solutions to any quadratic equation in the form:
$$ x = \frac{-b \pm \sqrt{b² - 4ac}}{2a} $$

### The Discriminant

-   b² - 4ac > 0: Two real roots
-   b² - 4ac = 0: One real root
-   b² - 4ac < 0: No real roots (complex roots)

### Examples

-   **Example 1**: Solve 2x² - 5x + 3 = 0

    -   a=2, b=-5, c=3
    -   Discriminant: (-5)² - 4(2)(3) = 1
    -   Solutions:  
         $$ x = \frac{5 \pm \sqrt{1}}{4} $$
     $$ x = \frac{5+1}{4} = 1.5 $$
     $$ x = \frac{5-1}{4} = 1 $$

-   **Example 2**: Solve x² + 4x + 4 = 0

    -   a=1, b=4, c=4
    -   Discriminant: 16 - 16 = 0
    -   Solution:  
        $$ x = \frac{-4 \pm \sqrt{0}}{2} = -2 $$

-   **Example 3**: Solve x² + x + 1 = 0

    -   a=1, b=1, c=1
    -   Discriminant: 1 - 4 = -3
    -   Complex solutions:  
         $$ x = \frac{-1 \pm \sqrt{-3}}{2} $$
     $$ x = \frac{-1 \pm i\sqrt{3}}{2} $$

-   **Example 4**: Solve 3x² - 6x + 2 = 0
    -   a=3, b=-6, c=2
    -   Discriminant: 36 - 24 = 12
    -   Solutions:  
         $$ x = \frac{6 \pm \sqrt{12}}{6} $$
     $$ x = \frac{6 \pm 2\sqrt{3}}{6} $$
     $$ x = 1 \pm \frac{\sqrt{3}}{3} $$

### Key Takeaways

> -   Works for all quadratic equations
> -   Discriminant tells nature of roots
> -   Always write in standard form (ax² + bx + c = 0) first
