class TokenizeJavaScript {
    tokenized: string[];
    constructor(text: string) {
        text = '$LINE$ ' + text.replace(/\n/g, '$LINE$');
        text = this.addSpaceBeforeAndAfterSymbols(text);

        let isInString = false;

        
        this.tokenized = text.split('/n').join(' ').trim().split(' ');
        let p = document.createElement('p');
        p.innerHTML = text;
        document.body.appendChild(p);

        let linecounter = 0;
        this.tokenized.forEach(e => {
            let p = document.createElement('p');
            let br = document.createElement('br');
            p.setAttribute('style', 'display: inline; margin: 5px; padding: 5px; border: 1px solid black;');
            let res = e;
            res = e == '$LINE$' ? `LINE ${++linecounter}` : res;
            res = e == 'public' ? 'PUBLIC_SYMBOL' : res;
            res = e == 'class' ? 'CLASS_SYMBOL' : res;
            res = e == 'static' ? 'STATIC_SYMBOL' : res;
            res = e == 'void' ? 'VOID_SYMBOL' : res;
            res = e == 'int' ? 'INT_SYMBOL' : res;
            res = e == '{' ? 'LEFT_BRACE' : res;
            res = e == '}' ? 'RIGHT_BRACE' : res;
            res = e == '(' ? 'LEFT_PARENTHESIS' : res;
            res = e == ')' ? 'RIGHT_PARENTHESIS' : res;
            res = e == '[' ? 'LEFT_BRACKET' : res;
            res = e == ']' ? 'RIGHT_BRACKET' : res;
            res = e == ';' ? 'SEMICOLON' : res;
            res = e == '=' ? 'EQUALS' : res;
            res = e == '+' ? 'PLUS' : res;
            res = e == '*' ? 'STAR' : res;
            res = e == '.' ? 'DOT' : res;
            p.innerHTML = res;
            document.body.appendChild(p);
            document.body.appendChild(br);
        })
    }
    addSpaceBeforeAndAfterSymbols(text: string){
        let symbols = ['(', ')', '{', '}', '[', ']',':', ';', ',', '.', '+', '-', '*', '/', '=', '<', '>', '!', '&', '|'];
        symbols.forEach(s => {
            text = text.split(s).join(' ' + s + ' ');
        });
        return text;
    }
}

new TokenizeJavaScript(
    `public class Simple1 {
    public static void main (String args[ ]) {
        int x = 3;
        int y = 5;
        int res = x + x*y + 2;
        System.out.print("Result: " );
        System.out.println(res);
    }
}`
);