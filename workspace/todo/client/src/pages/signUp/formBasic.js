import React from 'react';

const formBasic = () => {
    const onSubmitHandle = (e) => {
        e.preventDefault()
        console.log("submit 막힘", e)

        // form태그에서 단일 데이터 가져오기
        const formData = new FormData(e.target)
        const id = formData.get("id")
        console.log(id);

        // form태그에서 다중 데이터 가져오기
        const data = Object.fromEntries(formData.entries())
        console.log(data)

        // 값이 제대로 찍히지 않는 checkbox 값을 가져오기
        const checked = formData.getAll('check');
        console.log(checked)
    }
    return (
        <div>
            {/* basic */}
            <form action="#" onSubmit={onSubmitHandle}>
                <div>
                    <div>
                        <span>아이디</span><input type="text" name='id' placeholder='아이디를 입력하세요.'/>
                    </div>
                    <div>
                        <span>비밀번호</span><input type="password" name='password' placeholder='비밀번호를 입력하세요.'/>
                    </div>
                    <div>
                        <span>주소</span><input type="text" name='address' placeholder='주소를 입력하세요.'/>
                    </div>
                    <div>
                        <span>연락처</span><input type="text" name='phone' placeholder='연락처를 입력하세요.'/>
                    </div>
                </div>

                <div>
                    <span>바나나</span><input type="checkbox" name='check' value="banana"/>
                    <span>사과</span><input type="checkbox" name='check' value="apple"/>
                    <span>멜론</span><input type="checkbox" name='check' value="melon"/>
                </div>


                <button>전송</button>
            </form>
        </div>
    );
};

export default formBasic;