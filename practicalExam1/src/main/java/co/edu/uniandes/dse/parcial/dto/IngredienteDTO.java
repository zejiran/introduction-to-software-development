package co.edu.uniandes.dse.parcial.dto;

import lombok.Data;

@Data
public class IngredienteDTO {
	private long id;
	private String nombre;
	private int proporcion;
	private ArepaDTO arepa;
}
