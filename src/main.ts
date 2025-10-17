import express, {Request, Response} from "express"; //import do express para req res
import crypto from "crypto"; //import do crypto para criptografia
import pgp from "pg-promise";
const app = express();
app.use(express.json());

const connection = pgp()("postgres://postgres:123456@db:5432/app"); //aqui a gente usa db:5432 que é o nome do serviço da database que definimos lá no docker-compose

app.post("/signup", async (req: Request, res: Response) => { //aqui estamos criando a rota para o signup chegar até a porta 3000 do localhost
    console.log("/signup"); //aqui um console log apenas para confirmar que chegou
    const account = req.body;
    console.log("/signup", account); //requisitamos a conta e jogamos na tela
    const accountId = crypto.randomUUID(); //aqui geramos um id aleatório para devolver para o test
    await connection.query("insert into ccc.account (account_id, name, email, document, password) values ($1, $2, $3, $4, $5)", [accountId, account.name, account.email, account.document, account.password]);
    res.json({
        accountId // aqui temos o envio da resposta por json
    });
});

app.get("/accounts/:accountId", async (req: Request, res: Response) => { //aqui estamos criando a rota para o signup chegar até a porta 3000 do localhost
    const accountId = req.params.accountId
    console.log(`/accounts/${accountId}`);
    const [account] = await connection.query("select * from ccca.account", []);
    res.json(account);
});

app.listen(3000);