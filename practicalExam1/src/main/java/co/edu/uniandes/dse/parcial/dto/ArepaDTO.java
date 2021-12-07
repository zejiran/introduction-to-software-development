package co.edu.uniandes.dse.parcial.dto;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class ArepaDTO {
	private long id;
	private String nombre;
	private int tamano;
	private Date fechaElaboracion;
	private List<IngredienteDTO> ingredientes;
	private List<SitioVentaDTO> sitioVenta;
}
