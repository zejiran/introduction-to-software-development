package co.edu.uniandes.dse.parcial.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.edu.uniandes.dse.parcial.entities.ArepaEntity;

/**
 * Interface that persists an arepa
 */
@Repository
public interface ArepaRepository extends JpaRepository<ArepaEntity, Long> {

}