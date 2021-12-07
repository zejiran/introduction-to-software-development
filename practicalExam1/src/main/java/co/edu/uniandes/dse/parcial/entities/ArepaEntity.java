package co.edu.uniandes.dse.parcial.entities;

import lombok.Getter;
import lombok.Setter;
import uk.co.jemos.podam.common.PodamExclude;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
public class ArepaEntity extends BaseEntity {
	private String nombre;
	private int tamano;
	private Date fechaElaboracion;

	@PodamExclude
	@OneToMany(mappedBy = "arepa", fetch = FetchType.EAGER)
	private List<IngredienteEntity> ingredientes;

	@PodamExclude
	@OneToOne
	private SitioVentaEntity sitioVenta;
}
