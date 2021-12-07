package co.edu.uniandes.dse.parcial.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.edu.uniandes.dse.parcial.entities.ArepaEntity;
import co.edu.uniandes.dse.parcial.repositories.ArepaRepository;

@Service
public class ArepaService {

	@Autowired
	ArepaRepository arepaRepository;

	/**
	 * Obtiene la lista de los registros de Arepa.
	 *
	 * @return Colección de objetos de ArepaEntity.
	 */
	@Transactional
	public List<ArepaEntity> getArepas() {
		return arepaRepository.findAll();
	}
}