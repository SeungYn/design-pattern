# MVC 패턴

## 구성요소

### 1. Model:

- 애플리케이션에서 사용되는 데이터와 그 데이터를 처리

### 2. View:

- 사용자에게 보여지는 UI 부분
- 화면에 Model이 가진 데이터를 보여주는 역할을 한다.

### 3. Controller:

- 사용자의 입력을 받고 처리하는 부분

---

## 동작과정

1. 사용자의 Action들은 Controller에 들어오게 된다.
1. Controller는 사용자의 Action를 확인하고, Model을 업데이트 한다.
1. Controller는 Model을 나타내줄 View를 선택한다.
1. View는 Model을 이용하여 화면을 나타낸다.

---

## 특징

- Controller는 여러개의 View를 선택할 수 있는 1:n 구조이다.
- Controller는 View를 선택할 뿐 직접 업데이트 하지 않는다.
- View는 Controller를 알지 못한다.

---

## 장점

- 보편적으로 많이 사용되는 패턴이고 단순하다.

## 단점

- View와 Model 사이의 의존성이 높다.
- View와 Model의 높은 의존성은 애플리케이션이 커질 수록 복잡해지고 유지보수가 어렵게 만들 수 있다.
