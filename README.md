# todo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 요구사항

1. todo, doing, done 3가지 종류로 todo list를 관리하고 싶어요.
2. 등록 할때부터 todo, doing, done을 구분해서 등록할 수 있도록 하고 싶어요.

### 위 요구사항을 기반으로 제작

1. To Do, Doing, Done 중 상태를 선택
2. 내용을 작성 후 Enter를 치거나, 우측 +버튼을 클릭
3. 해당하는 상태에 내용이 추가되고 localStorage에 배열로 저장
4. 새로고침하면 localStorage에 저장된 내용이 일정시간(0.3s) 후 출력
5. 각 내용 우측에 휴지통 버튼을 클리하면 해당 내용만 삭제되고, 가장 하단에 있는 Clear All을 클릭하면 모든 내용이 삭제
*상태수정 및 내용수정 기능은 개발 단계에 있습니다.
