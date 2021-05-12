/**
 * Ser autenticavel significa ter um método autenticar
 * 
 * Aplicando o conceito Ducky Type
 */

export class SistemaAutenticacao{
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        // existe essa método dentro desse objeto? 
        return "autenticar" in autenticavel 
            && autenticavel.autenticar instanceof Function;
    }
}