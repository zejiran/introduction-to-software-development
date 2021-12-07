package co.edu.uniandes.dse.parcial.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
public class SitioVentaEntity extends BaseEntity {
	private String nombre;
}
