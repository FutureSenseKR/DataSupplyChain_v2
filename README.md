## DataBack
- npm install
- npm start
- port는 5000번 고정입니다
 -> 프런트에서 api 경로가 localhost:5000입니다

## DataFront
- coreui-free 폴더 안에서 시작
- npm install
- npm start

## Folder-Monitoring
- npm install
- npm start
- app.js 파일 
 var watcher = chokidar.watch('C:\\Users\\nk129\\Desktop\\DataSupplyChain\\Test', {ignored:/[`~!@#$%^&*|\\]/gi, persistent:true});
 -> 첫 번째 인자에 폴더 경로 설정

## NODE
- SPRING이 .maven이나 .gradle로 의존성 관리를 하듯이 node는 package.json 파일로 합니다
- 각 폴더에서 package.json이 존재하는 경로에서 npm command 이용하시면 될 것 같습니다