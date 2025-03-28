# **Foundational Number Concepts**

## Chapter 23: Divisibility Rules for 2-12

### Definitions

-   **Divisibility**: Property of an integer to be divided by another without remainder
-   **Divisor**: Number that divides another number
-   **Composite Number**: Positive integer with more than two factors
-   **Prime Number**: Positive integer with exactly two factors (1 and itself)

### Divisibility Rules Table

| Divisor | Rule                                  | Example                            |
| ------- | ------------------------------------- | ---------------------------------- |
| 2       | Last digit even (0,2,4,6,8)           | 346 → 6 is even                    |
| 3       | Sum of digits divisible by 3          | 513 → 5+1+3=9 (9÷3=3)              |
| 4       | Last two digits divisible by 4        | 1,724 → 24÷4=6                     |
| 5       | Ends with 0 or 5                      | 230 or 785                         |
| 6       | Divisible by both 2 and 3             | 414 → even and 4+1+4=9 (div by 3)  |
| 7       | Double last digit, subtract from rest | 203 → 20-(3×2)=14 (div by 7)       |
| 8       | Last three digits divisible by 8      | 9,128 → 128÷8=16                   |
| 9       | Sum of digits divisible by 9          | 729 → 7+2+9=18 (div by 9)          |
| 10      | Ends with 0                           | 1,500                              |
| 11      | Alternating sum divisible by 11       | 9,570 → (9-5+7-0)=11               |
| 12      | Divisible by both 3 and 4             | 636 → sum=15 (div by 3) and 36÷4=9 |

### Examples

1. **Checking Divisibility by 6**

    - Problem: Is 9,342 divisible by 6?
    - Solution:
        - Last digit 2 → divisible by 2
        - Sum: 9+3+4+2=18 → divisible by 3
        - Conclusion: Divisible by 6

2. **Applying Rule for 7**

    - Problem: Verify 581 is divisible by 7
    - Solution:
        - 58 - (1×2) = 56
        - 56 ÷ 7 = 8
        - Conclusion: Divisible by 7

3. **Composite Number Check**
    - Problem: Is 143 prime?
    - Solution:
        - Test divisibility:
            - 143 ÷ 11 = 13
        - Has factors other than 1 and itself
        - Conclusion: Composite number

### Key Takeaways

> -   Divisibility rules simplify factorization
> -   Multiple rules can combine (e.g., rule for 6 combines 2 and 3)
> -   Rules become progressively more complex for higher numbers
> -   Essential for simplifying fractions and number theory

## Chapter 24: Factoring Whole Numbers

### Definitions

-   **Factor**: Whole number that divides another exactly
-   **Factor Pair**: Two numbers multiplied to get the original number
-   **Prime Factorization**: Expression of a number as product of primes
-   **Tree Method**: Visual factorization approach

### Examples

1. **Finding All Factors**

    - Problem: Find all factors of 36
    - Solution:
        - Systematic checking:
          1, 2, 3, 4, 6, 9, 12, 18, 36
        - Factor pairs: (1,36), (2,18), (3,12), (4,9), (6,6)

2. **Prime Factorization**

    - Problem: Factorize 120 completely
    - Solution:
        - 120 ÷ 2 = 60
        - 60 ÷ 2 = 30
        - 30 ÷ 2 = 15
        - 15 ÷ 3 = 5
        - 5 ÷ 5 = 1
        - Result: 2³ × 3 × 5

3. **Tree Method Visualization**
    ```mermaid
    graph TD
      120 --> 2
      120 --> 60
      60 --> 2
      60 --> 30
      30 --> 2
      30 --> 15
      15 --> 3
      15 --> 5
    ```

### Key Takeaways

> -   Every number has at least two factors
> -   Prime factorization is unique
> -   Factor trees help visualize the process
> -   Essential for finding GCD and LCM

## Chapter 25: Finding the Greatest Common Divisor (GCD)

### Definitions

-   **GCD**: Largest shared factor of multiple numbers
-   **Euclidean Algorithm**: Efficient method for finding GCD
-   **Coprime**: Numbers with GCD of 1

### Methods Comparison

| Method              | Steps                                | Best For       |
| ------------------- | ------------------------------------ | -------------- |
| Listing Factors     | List all factors of each number      | Small numbers  |
| Prime Factorization | Factorize and multiply common primes | Medium numbers |
| Euclidean Algorithm | Repeated division                    | Large numbers  |

### Examples

1. **Prime Factorization Method**

    - Problem: Find GCD of 48 and 180
    - Solution:
        - 48 = 2⁴ × 3
        - 180 = 2² × 3² × 5
        - Common primes: 2² × 3
        - GCD = 4 × 3 = 12

2. **Euclidean Algorithm**

    - Problem: Find GCD of 1071 and 462
    - Solution:
        - 1071 = 462×2 + 147
        - 462 = 147×3 + 21
        - 147 = 21×7 + 0
        - GCD = 21

3. **Three-Number GCD**
    - Problem: Find GCD of 24, 60, 84
    - Solution:
        - First find GCD(24,60)=12
        - Then find GCD(12,84)=12
        - Final GCD=12

### Key Takeaways

> -   GCD is crucial for fraction simplification
> -   Euclidean algorithm is most efficient
> -   Always verify by checking divisors
> -   Used in ratio calculations and cryptography

## Chapter 26: Finding the Least Common Multiple (LCM)

### Definitions

-   **LCM**: Smallest shared multiple of numbers
-   **Multiple**: Product of number and integer
-   **LCD**: LCM of denominators (special case)

### Examples

1. **Listing Multiples Method**

    - Problem: Find LCM of 4 and 6
    - Solution:
        - Multiples of 4: 4,8,12,16,20...
        - Multiples of 6: 6,12,18,24...
        - First common: 12
        - LCM=12

2. **Prime Factorization Method**

    - Problem: Find LCM of 15 and 20
    - Solution:
        - 15 = 3 × 5
        - 20 = 2² × 5
        - LCM = 2² × 3 × 5 = 60

3. **Using GCD to Find LCM**
    - Problem: Find LCM of 18 and 24
    - Solution:
        - GCD(18,24)=6
        - LCM=(18×24)/6=72

### Key Takeaways

> -   LCM essential for fraction operations
> -   Always ≥ largest number in set
> -   Relationship with GCD: LCM(a,b)=(a×b)/GCD(a,b)
> -   Used in scheduling and periodic events
