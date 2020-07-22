/**
 * @name app.js
 * @version 1.0.0
 * @author 
 * @abstract Manage contact form
 * @see JQuery (https://jquery.com/)
 */

$(document).ready(/**le $ est l'objet jquery et document est document object model */
    () => {/**fonction flechée */
        console.log('App works !')
        //sets array of controls that are required
        const requiredControls = [
            'lastname-ctrl',
            'email-ctrl'
        ]
        //Sets an event handler on form
        $('#contact-form').on(/**('form") représente l'objet ou on veut placer l'evennement*/
            'change keyup',
            (event) => {
                console.log('change was detected on form')
                let isValid = true // Formulaire est okay... On va voir ensuite
                requiredControls.forEach((control) => {
                    //console.log('check for' + control + 'control validity')/**meme effet qu'en dessous */
                    console.log(`check for ${control} control`)
                    const requiredControlValue = $('[name="' + control + '"]').val()/**la methode .val permet de récupérer la valeur */
                    console.log(`Value for ${control} : ${requiredControlValue}`)
                    if (requiredControlValue == '') {//si un des deux champs de requiredvalue est vide, isvalid devient false
                        isValid = false
                    }
                    if (isValid == true) {
                        $('#btn-success').removeAttr('disabled');//permet d'activer ou desactiver le boutton envoyer
                    } else {
                        $('#btn-success').attr('disabled', 'disabled');
                    }
                })
                // Well...
                console.log(`My form is  ${isValid ? 'Valid' : 'Invalid'}`)//operateur ternaire, permet de remplacer les condition "${isValid ? 'valid' : 'invalid}" permet de demander si la variable isvalid est vrai ou fausse, vrai = premiere string et faux l'autre.

            }
        )
        //blur event handler : fired when the focus is lost from a field
        $('[required]').on(
            'blur',
            (event) => {
                console.log('Focus was lost on a required field... but which?')
                const value = $(event.target).val()
                if (value == ''){
                    //how do i remove a class on the next div?
                    $(event.target).next('div').removeClass('hidden')
                }else{
                    //how do i add a class on the next div?
                    $(event.target).next('div').addClass('hidden')
                }
            }
        )
    }
)

