const expressionEvaluator = require('math-expression-evaluator');
module.exports = (message) => {
    message   = message.split(">")[1].trim();
    let   result = "Please reply with some mathematical expression Eg:(1+2^2)*(1*6+3)";
    try{
        message = message.replace(/([^\d\.\+\-\/\*\(\)\^])/g,"");
        result  = expressionEvaluator.eval(message);
        result  = result.toString();
    } 
    catch(err){
        
    }
    return result;
}