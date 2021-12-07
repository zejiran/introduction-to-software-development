package co.edu.uniandes.dse.parcial.services;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import co.edu.uniandes.dse.parcial.entities.ArepaEntity;

import uk.co.jemos.podam.api.PodamFactory;
import uk.co.jemos.podam.api.PodamFactoryImpl;

/**
 * Pruebas de lógica de Arepa
 */
@ExtendWith(SpringExtension.class)
@DataJpaTest
@Transactional
@Import(ArepaService.class)
class ArepaServiceTest {

	@Autowired
	private ArepaService arepaService;

	@Autowired
	private TestEntityManager entityManager;

	private PodamFactory factory = new PodamFactoryImpl();

	private List<ArepaEntity> arepaList = new ArrayList<>();

	/**
	 * Configuración inicial de la prueba.
	 */
	@BeforeEach
	void setUp() {
		clearData();
		insertData();
	}

	/**
	 * Limpia las tablas que están implicadas en la prueba.
	 */
	private void clearData() {
		entityManager.getEntityManager().createQuery("delete from ArepaEntity").executeUpdate();
	}

	/**
	 * Inserta los datos iniciales para el correcto funcionamiento de las pruebas.
	 */
	private void insertData() {
		for (int i = 0; i < 3; i++) {
			ArepaEntity arepaEntity = factory.manufacturePojo(ArepaEntity.class);
			entityManager.persist(arepaEntity);
			arepaList.add(arepaEntity);
		}
	}

	/**
	 * Prueba para consultar la lista de Arepa.
	 */
	@Test
	void testGetArepas() {
		List<ArepaEntity> list = arepaService.getArepas();
		assertEquals(list.size(), arepaList.size());
		assertNotNull(list.get(0).getTamano());
		assertNotNull(list.get(0).getFechaElaboracion());
		assertNotNull(list.get(0).getId());
		assertNotNull(list.get(0).getNombre());
	}
}