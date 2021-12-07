package co.edu.uniandes.dse.parcial.entities;

import lombok.Getter;
import lombok.Setter;
import uk.co.jemos.podam.common.PodamExclude;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
@Getter
@Setter
public class IngredienteEntity extends BaseEntity {
	private String nombre;
	private int proporcion;

	@PodamExclude
	@ManyToOne
	private ArepaEntity arepa;
}
