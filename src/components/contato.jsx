import { Button } from "@material-tailwind/react";
import { InputDefault } from "./common/input";
import { TextareaDefault } from "./common/textArea";

const Contato = () => {
    return ( 
        <section className="bg-white py-2">
            <form className="flex flex-col flex-wrap gap-3 items-center my-3 " action="">
                <h1 className="text-3xl">Entre em contato</h1>
                <InputDefault label={"Nome"}/>
                <InputDefault label={"Email"}/>
                <TextareaDefault label={"Mensagem"}  />
                <Button className="bg-green-600 hover:bg-green-900" >
                    Enviar
                </Button>
            </form>
        </section>
     );
}
 
export default Contato;