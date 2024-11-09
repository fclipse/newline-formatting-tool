// element 가져오는 부분
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const formatButton = document.querySelector('#formatButton');
const copyButton = document.querySelector('#copyButton');
const caption = document.querySelector('#caption');
const option = document.querySelectorAll('input[name="option"]');

const customTag = document.querySelector('#customTag');
const tag = document.querySelector('#tag');

window.onload = () => {
    console.log('Newline formatting tool - v1.0');

    // Focus the input field
    input.focus();
    // Add event listener to format button
    formatButton.addEventListener('click', formatString);
    // Add event listener to copy button
    copyButton.addEventListener('click', copyToClipboard);
    // 1. 포맷 버튼 클릭시 formString() 함수 실행 및 caption 보이게
    formatButton.addEventListener('click', formatString);
    formatButton.addEventListener('click', () => {
        if (input.value === '') {
            caption.textContent = '입력된 텍스트가 없습니다.';
        } else {
            caption.textContent = '결과가 생성되었습니다.';
        }
        caption.style.display = 'block';
    });

    // 2. input 및 option 값 바뀌면 caption 숨기게
    input.addEventListener('input', () => {
        caption.style.display = 'none';
    });
    option.forEach((radio) => {
        radio.addEventListener('change', () => {
            caption.style.display = 'none';
            if (radio.value === '4') {
                tag.disabled = false;
            } else {
                tag.disabled = true;
            }
            if (radio.value === '5') {
                customTag.disabled = false;
            } else {
                customTag.disabled = true;
            }
        });
    });
};

// 1. 문자열 format하는 함수
/**
 * 포맷팅 옵션:
 * 1. 개행 문자 제거 (모든 개행 문자를 제거하고 하나의 문자열로 변환합니다)
 * 2. 개행 문자를 \n으로 변환 (\\r\\n, \\n, \r\n, \r을 \n으로 변환해 실제 줄바꿈으로 변환합니다)
 * 3. 개행 문자를 <br> 태그로 변환  (모든 개행 문자를 <br> 태그로 변환합니다)
 * 4. 개행 문자를 특정 태그로 감싸기 (<p>, <div>, ...) (모든 개행 문자를 선택한 태그로 변환합니다)
 * 5. 개행 문자를 \r\n, \n, \\r\\n, \\n 등 선택한 문자열로 변환 (모든 개행 문자를 선택한 문자열로 변환합니다)
 */
function formatString() {
    let text = input.value;
    const option = document.querySelector('input[name="option"]:checked').value;
    const trimOption = document.querySelector('input[name="trimOption"]:checked').value;
    let formattedText;

    if (!text) {
        return;
    }

    // 공백 처리 옵션 적용
    switch (trimOption) {
        case 'trim':
            text = text.trim();
            break;
        case 'removeAll':
            text = text.replace(/\s+/g, '');
            break;
        default:
            break;
    }

    console.log(text, option);

    switch (option) {
        case '1':
            // 모든 개행 문자를 제거
            formattedText = text.replace(/\\r\\n|\\n|\r\n|\n|\r/g, '');
            break;
        case '2':
            // 모든 개행 문자를 실제 줄바꿈(\n)으로 변환
            formattedText = text.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
            break;
        case '3':
            // 모든 개행 문자를 <br> 태그로 변환
            formattedText = text.replace(/\\r\\n|\\n|\r\n|\n|\r/g, '<br>');
            break;
        case '4':
            // 모든 개행 문자를 선택한 태그로 감싸기
            const tag = document.querySelector('#tag').value;
            formattedText = text.replace(/\\r\\n|\\n|\r\n|\n|\r/g, `<${tag}>$&</${tag}>`);
            break;
        case '5':
            // 모든 개행 문자를 선택한 문자열로 변환
            const customTag = document.querySelector('#customTag').value;
            formattedText = text.replace(/\\r\\n|\\n|\r\n|\n|\r/g, customTag);
            break;
        default:
            formattedText = text;
    }

    output.value = formattedText;
}

// 2. 버튼 클릭 시 클립보드로 복사
function copyToClipboard() {
    output.select();
    // document.execCommand('copy');
    navigator.clipboard.writeText(output.value);
    // alert('복사되었습니다.');
    caption.textContent = '복사되었습니다.';
}