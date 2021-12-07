package co.edu.uniandes.dse.parcial.exceptions;

import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.PRECONDITION_FAILED;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    /**
     * Handles EntityNotFoundException. Created to encapsulate errors with more detail than javax.persistence.EntityNotFoundException.
     *
     * @param ex the EntityNotFoundException
     * @return the ApiError object
     */
    @ExceptionHandler(EntityNotFoundException.class)
    protected ResponseEntity<Object> handleEntityNotFound(
    		EntityNotFoundException ex) {
        ApiError apiError = new ApiError(NOT_FOUND);
        apiError.setMessage(ex.getMessage());
        return buildResponseEntity(apiError);
    }
    
    /**
     * Handles IllegalOperationException. 
     *
     * @param ex the IllegalOperationException
     * @return the ApiError object
     */
    @ExceptionHandler(IllegalOperationException.class)
    protected ResponseEntity<Object> handleIllegalOperation(
    		IllegalOperationException ex) {
        ApiError apiError = new ApiError(PRECONDITION_FAILED);
        apiError.setMessage(ex.getMessage());
        return buildResponseEntity(apiError);
    }

    private ResponseEntity<Object> buildResponseEntity(ApiError apiError) {
        return new ResponseEntity<>(apiError, apiError.getStatus());
    }

}
