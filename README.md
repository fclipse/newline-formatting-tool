# 개행 문자 포맷팅 도구

- newline-formatting-tool v1.0

## update history

- 2024.11.09 developed by [SeongJunHan](https://github.com/fclipse)

## 개요

- 개행 문자 포맷팅 도구는 개행 문자를 포함한 문자열을 다양한 형태로 변환하는 도구입니다.
- `\r\n` 등 문자열에 포함된 개행 문자를 실제 줄바꿈으로 변환하거나, HTML 태그로 변환할 수 있습니다.

## 사용 방법

1. 텍스트 영역에 개행 문자를 포함한 문자열을 입력합니다.
2. 원하는 변환 방식을 선택합니다.
3. `포맷팅` 버튼을 클릭합니다.
4. 변환된 결과를 확인합니다.

## 기능

- 개행 문자 포맷팅 도구는 다음과 같은 기능을 제공합니다.

1. 모든 개행 문자를 제거합니다.
2. 텍스트로 된 개행 문자를 실제 줄바꿈으로 변환합니다.
3. 개행 문자를 `<br>` 태그로 변환합니다.
4. 개행 문자를 지정한 태그로 감싸서 변환합니다.
5. 개행 문자를 입력한 문자로 변환합니다.

### 제공예정 기능 (개발중)

  - 개행 문자를 `<br>` 태그로 변환
  - 개행 문자를 `<p>` 태그로 변환
  - 개행 문자를 `<div>` 태그로 변환
  - 개행 문자를 `<span>` 태그로 변환
  - 개행 문자를 `<ul>`, `<ol>`, `<li>` 태그로 변환
  - 개행 문자를 `<table>`, `<tr>`, `<td>` 태그로 변환
  - 개행 문자를 `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` 태그로 변환
  - 개행 문자를 `<blockquote>` 태그로 변환
  - 개행 문자를 `<code>` 태그로 변환
  - 개행 문자를 `<pre>` 태그로 변환
  - 개행 문자를 `<a>` 태그로 변환
  - 개행 문자를 `<img>` 태그로 변환
  - 개행 문자를 `<input>` 태그로 변환
  - 개행 문자를 `<button>` 태그로 변환

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 생성합니다.
3. 변경 사항을 커밋하고 푸시합니다.
4. 새로운 풀 리퀘스트를 생성합니다.

### 개발 환경 설정

1. 저장소를 클론합니다.

    ```bash
    git clone
    ```

2. 프로젝트 폴더로 이동하고, 의존성 파일을 설치합니다.
    - 마지막 줄의 명령어는 css를 수정할 때마다 tailwind css를 build합니다.

    ```bash
    cd newline-formatting-tool
    npm install
    npx tailwindcss -i ./src/style.css -o ./src/output.css --watch
    ```

3. 코드를 수정합니다.

4. 수정이 완료됐다면 tailwind css를 build합니다
    - 이 단계에 왔다면 위의 watch 명령어를 종료하고, 아래의 명령어를 실행합니다.

    ```bash
    npx tailwindcss -i ./src/style.css -o ./src/output.css --minify
    ```

5. dist 폴더에 결과물들을 저장합니다.
    - Windows

    ```bash
    ./makeDistFiles
    ```

    - Mac/Linux

    ```bash
    ./makeDistFiles.sh
    ```

6. 변경 사항을 커밋하고 푸시합니다.

    ```bash
    git add .
    git commit -m "{commit message}"
    git push
    ```

7. 새로운 풀 리퀘스트를 생성합니다.

## 개발 환경

- 개발 언어: HTML, CSS, JavaScript
- 개발 도구: Visual Studio Code
- 개발 환경: Windows 10
- 웹 브라우저: Chrome, Firefox, Edge

## 라이선스

- MIT License

## Open Source License

- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)